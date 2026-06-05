#!/bin/bash
# Post-processing script to fix doubled paths in Siemens internal deployment
# This script copies CSS and JS files to the location where Hugo's canonifyURLs generates doubled paths

set -e

DEEP_PATH="documentation/internal/PL20260323299104942/en-US/public"
PUBLIC_DIR="public"

echo "Fixing doubled paths for Siemens internal deployment..."

# Create the doubled path directory structure
mkdir -p "${PUBLIC_DIR}/${DEEP_PATH}/scss"
mkdir -p "${PUBLIC_DIR}/${DEEP_PATH}/js"

# Copy CSS files
echo "Copying CSS files..."
cp "${PUBLIC_DIR}/scss/main.css" "${PUBLIC_DIR}/${DEEP_PATH}/scss/main.css"
cp "${PUBLIC_DIR}/scss/main.css.map" "${PUBLIC_DIR}/${DEEP_PATH}/scss/main.css.map"

# Copy JS files
echo "Copying JS files..."
cp "${PUBLIC_DIR}/js/main.js" "${PUBLIC_DIR}/${DEEP_PATH}/js/main.js"
cp "${PUBLIC_DIR}/js/click-to-copy.js" "${PUBLIC_DIR}/${DEEP_PATH}/js/click-to-copy.js"

echo "Done! CSS and JS files copied to handle doubled paths."
echo "Note: Font files use relative paths in CSS and don't need to be copied."
