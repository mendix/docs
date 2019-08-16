# [page] Create a Studio rendering for Pluggable widget

Pluggable web widget can optionally provide a preview component for the rendering in Studio and Studio Pro Design mode. Adding a preview will enhance the “what you see is what you get” experience. Without the preview a standard grey box with name of the widget is shown. 

![Studio Pro Structure mode - Widget box]()

![Studio Pro Design mode -  No preview]()


To provide preview, a JavaScript file should be created in the same folder as the widget definition XML file. It should have the same name as the definition file and it should have the file extension `.webmodeler.js`. 

`{path}/{``widgetDefinitionXmlName}.``we``bm``odeler``.js`

The javascript file is treated as a CommonJS module and can expose a set of functions for the used in the preview. 

The exported `preview` function receives the properties and should return a ReactNode that will be used to show the widget in preview mode.


    exports.preview = function(props) {
        return React.createElement("div", { className: "widget-counter" }, 20);
    };


![Studio Pro Design mode - Preview]()


Optionally you can export a `getPreviewCss` function to add styling to the preview. It should return plain text CSS.


    exports.getPreviewCss = function() {
        return ".widget-counter { color: #0F0 }";
    };


![Studio Pro Design mode - Styled preview]()


When using the generator tools you can us TypeScript with extended React syntax  which makes the code auto complete and better readable. 


    import { SFC, createElement } from "react";
    import { CounterPreviewProps } from "../typings/CounterProps";
    
    export const preview: SFC<CounterPreviewProps> = (props) => {
        return <div className="widget-counter">20</div>;
    };
    
    export function getPreviewCss(): string {
        return ".widget-counter { color: #0F0 }";
    }

The widget tooling can also compile SCSS to CSS, bundle it for the preview, and re-use the run-time component in the preview. For an example see [How To Part to 2](/howto/extensibility/create-a-pluggable-widget-two#3-6-enabling-preview-mode)

**Preview properties**
The properties defined in the widgetDefinitionXML will also be passed to the preview component. The content might vary in the preview from the runtime as they will never receive any data. All attributes are of type `string` containing the relevant display information, with an exceptions of `actions` properties. They will contain an object with a `type` property and an `params` property with more details. When using the widget tools with TypeScript the preview typings are generated for you. 

**Designing a preview**
To create a “see is what you get" experience design a the preview that looks like the runtime and uses the same sizing dimensions. The preview can be without data for the basic input widgets or with a set of representative data for the more complex widgets. 
All user interactions should be handled Studio (Pro), so prevent any animate and mouse interactions.  
For complex widget the configuration might have conditional property configurations. Some checks can be done before runtime, in those cases you could generate custom rendering with error feedback when needed.

**Need to knows**
The preview runs inside an iframe. When the user change mode Phone / Tabled / Desktop the `window` does not resize. If your widget has a canvas that needs size calculations for re-rendering (for example a chart), you need to add a size observer. For example https://www.npmjs.com/package/react-resize-detector
The preview runs inside the Mendix Studio code base and does not have access to the runtime API. When you try to access [client API](https://apidocs.mendix.com/8/client/) like `window.mxui` or `window.logger` it will fail.

**Debugging**
At the moment Mendix Studio Pro does not have proper way of debugging widget previews. To inspect and debug the widget, you have to synchronise with the Mendix Studio and debug it in a browser. When there is an error in the preview and Mendix Studio (Pro) can not render it, a grey box with the widget name is shown, similar as if there is no preview at all. In some cases it might render a red alert box showing a generic error message. In exceptional cases it will prevent the preview page loading at all. To reload an updated preview, close the project and re-open it. We are currently working on improving the developer experience.


TODO describe:

- ~~Should be non interactive, mouse events are prevented~~
- ~~Should not animate~~
- Props different than in runtime, document what
- ~~Runtime components are not available (logger, formatter, mxui, etc)~~
- ~~Recommend to use representable sample data~~
- ~~Suggestion to validating properties, before runtime? Or wait~~
- ~~Re-use the rendering component (lib) used by your runtime widget~~
- ~~Using the generator tools for tsx / jsx support, class, component, import bundling and requiring css files~~
- ~~Note that the preview is rendering in a iframe, it is not possible to attach to the window resize events. Recommend use an observer? Useful when user change the preview profile preview mode mobile/ tablet/ responsive~~
- Document feature flag " --dev-view-mode” (when there is an error the grey box is rendered)


**Issues Studio Pro**

- icon prop using images, crashes the preview
    https://mendix.atlassian.net/browse/PAG-1121
- props class, styles are not received, they are attached to the wrapper
    https://mendix.atlassian.net/browse/PAG-1128
- Can we have de react dev tool extension included in the debugger? &
- Should the feature flag " --dev-view-mode” got to the modeler menu?
    https://mendix.atlassian.net/browse/PAG-1129
- Preview does not reload with an updated version from the file system on pressing F4
    https://mendix.atlassian.net/browse/PAG-1127
- property `image` always has an empty URL
    https://mendix.atlassian.net/browse/PAG-1126
- action `link` from dynamic from attributes crashes the `Design mode` https://mendix.atlassian.net/browse/PAG-1125
- When you make a slight mistake the Studio dies…. not resilient, so not suitable for external dev?
- Is there a nicer way of loading the CSS?
- Should Studio show the widget icon in the grey box, when no preview rendering is available?

Do not describe custom properties visibility - they are not be ready for a showtime yet.

