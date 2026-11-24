#!/usr/bin/env python3
"""Render the testing pyramid image used on /refguide/testing/.

Edit the LAYERS data below, then run:

    python3 source_files/refguide/testing-pyramid/render_testing_pyramid.py

This writes testing-pyramid.svg next to this script and renders
static/attachments/refguide/testing/testing-pyramid.png with headless Google Chrome.
It uses only the Python standard library.
"""

import os
import shutil
import subprocess
import sys
import tempfile
from html import escape
from pathlib import Path

# --- Content ---------------------------------------------------------------
# Each layer is one band of the pyramid. Each row in a layer is one line:
# (test type, Mendix offerings, partner offerings). An offering cell can be a
# string or a list of strings; a list is stacked as several lines in that row.
LAYERS = [
    {"color": "#45B0E1", "shape": "trapezoid", "rows": [
        ("Frontend / UI / E2E", "", "Menditect: MTA"),
    ]},
    {"color": "#83CBEB", "shape": "trapezoid", "rows": [
        ("API tests", "", "Menditect: MTA"),
        ("Integration tests", "Testflows (beta)", "Menditect: MTA"),
    ]},
    {"color": "#C1E5F5", "shape": "trapezoid", "rows": [
        ("Unit tests", ["Testflows (beta)", "Unit Testing Module"], ""),
        ("Static code analysis", "Best-Practice Recommender", "SIG: QSM"),
    ]},
    {"color": "#D0D0D0", "shape": "rectangle", "rows": [
        ("Performance", "Tracing", "Datadog"),
        ("Security", "Developer Portal Findings", "SIG: QSM"),
    ]},
]
HEADERS = ("Mendix", "Partner")

# --- Layout ----------------------------------------------------------------
WIDTH, HEIGHT = 1070, 592
FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif"
LABEL_SIZE = 30          # Text inside the pyramid
CELL_SIZE = 21           # Text in the Mendix and Partner columns
STACK_GAP = 26           # Line distance for stacked cell text
TEXT_COLOR = "#000000"
OUTLINE = "#1A1A1A"

HEADER_H = 46            # Height of the header row above the first layer
LAYER_H = 137            # Height of each layer
LAYER_GAP = 11           # Vertical space between layers
PYRAMID_LEFT, PYRAMID_RIGHT = 8, 488   # Width of the base of the pyramid
TOP_WIDTH = 265          # Width of the top edge of the top layer
MENDIX_X, PARTNER_X, TABLE_RIGHT = 504, 855, 1064
MENDIX_BG, PARTNER_BG = "#F2F2F2", "#E6E6E6"

ROOT = Path(__file__).resolve().parents[3]
SVG_OUT = Path(__file__).with_name("testing-pyramid.svg")
PNG_OUT = ROOT / "static/attachments/refguide/testing/testing-pyramid.png"


def layer_top(i):
    return 4 + i * (LAYER_H + LAYER_GAP)


def text(x, y, value, size, anchor="start", weight="normal"):
    return (f'<text x="{x}" y="{y}" font-family="{FONT}" font-size="{size}" font-weight="{weight}" '
            f'fill="{TEXT_COLOR}" text-anchor="{anchor}" dominant-baseline="middle">{escape(value)}</text>')


def cell(x, y, value):
    lines = value if isinstance(value, list) else [value] if value else []
    start = y - (len(lines) - 1) * STACK_GAP / 2
    return [text(x + 20, start + n * STACK_GAP, line, CELL_SIZE) for n, line in enumerate(lines)]


def build_svg():
    trapezoids = [l for l in LAYERS if l["shape"] == "trapezoid"]
    # The trapezoids share one slope, from TOP_WIDTH at the top to the full base at the last trapezoid.
    pyramid_h = len(trapezoids) * LAYER_H + (len(trapezoids) - 1) * LAYER_GAP
    center = (PYRAMID_LEFT + PYRAMID_RIGHT) / 2
    base_w = PYRAMID_RIGHT - PYRAMID_LEFT

    def half_width(y):
        return (TOP_WIDTH + (base_w - TOP_WIDTH) * (y - 4) / pyramid_h) / 2

    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}">']
    table_bottom = layer_top(len(LAYERS) - 1) + LAYER_H
    out.append(f'<rect x="{MENDIX_X}" y="4" width="{PARTNER_X - MENDIX_X}" height="{table_bottom - 4}" fill="{MENDIX_BG}"/>')
    out.append(f'<rect x="{PARTNER_X}" y="4" width="{TABLE_RIGHT - PARTNER_X}" height="{table_bottom - 4}" fill="{PARTNER_BG}"/>')
    out.append(text(MENDIX_X + 20, 4 + HEADER_H / 2, HEADERS[0], CELL_SIZE + 1, weight="bold"))
    out.append(text(PARTNER_X + 16, 4 + HEADER_H / 2, HEADERS[1], CELL_SIZE + 1, weight="bold"))

    for i, layer in enumerate(LAYERS):
        top, bottom = layer_top(i), layer_top(i) + LAYER_H
        if layer["shape"] == "trapezoid":
            t, b = half_width(top), half_width(bottom)
            points = f"{center - t},{top} {center + t},{top} {center + b},{bottom} {center - b},{bottom}"
            out.append(f'<polygon points="{points}" fill="{layer["color"]}" stroke="{OUTLINE}" stroke-width="2"/>')
        else:
            out.append(f'<rect x="{PYRAMID_LEFT}" y="{top}" width="{base_w}" height="{LAYER_H}" '
                       f'fill="{layer["color"]}" stroke="{OUTLINE}" stroke-width="2"/>')

        rows = layer["rows"]
        step = LAYER_H / (len(rows) + 1) if len(rows) > 1 else LAYER_H / 2
        for r, (label, mendix, partner) in enumerate(rows):
            y = top + step * (r + 1) if len(rows) > 1 else top + LAYER_H / 2
            # Pull two-row layers slightly apart, like the original design.
            if len(rows) == 2:
                y = top + LAYER_H * (0.30 if r == 0 else 0.72)
            out.append(text(center, y, label, LABEL_SIZE, anchor="middle"))
            out += cell(MENDIX_X, y, mendix)
            out += cell(PARTNER_X - 4, y, partner)

    out.append("</svg>")
    return "\n".join(out)


def find_chrome():
    candidates = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        shutil.which("google-chrome"), shutil.which("chromium"), shutil.which("chrome"),
    ]
    for c in candidates:
        if c and os.path.exists(c):
            return c
    sys.exit("Google Chrome not found; install it or add it to the candidates in find_chrome().")


def render_png(svg):
    html = f"<!doctype html><html><body style='margin:0;background:transparent'>{svg}</body></html>"
    with tempfile.TemporaryDirectory() as tmp:
        page = Path(tmp) / "pyramid.html"
        page.write_text(html, encoding="utf-8")
        subprocess.run([
            find_chrome(), "--headless=new", "--disable-gpu", "--hide-scrollbars",
            "--force-device-scale-factor=1", f"--window-size={WIDTH},{HEIGHT}",
            "--default-background-color=00000000", f"--user-data-dir={tmp}/profile",
            f"--screenshot={PNG_OUT}", page.as_uri(),
        ], check=True, capture_output=True)


if __name__ == "__main__":
    svg = build_svg()
    SVG_OUT.write_text(svg, encoding="utf-8")
    render_png(svg)
    print(f"Wrote {SVG_OUT.relative_to(ROOT)} and {PNG_OUT.relative_to(ROOT)}")
