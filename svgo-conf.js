const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    path: [
        resolve('src/assets')
    ],
    svgoConf: {
        pligins: [
            {
                removeAttrs: {
                    attrs: '(fill|stroke)'
                },
            },
            {
                cleanupAttrs: true,
            },
            {
                removeDoctype: true,
            },
            {
                removeXMLProcInst: true,
            },
            {
                removeComments: true,
            },
            {
                removeMetadata: true,
            },
            {
                removeTitle: true,
            },
            {
                removeDesc: true,
            },
            {
                removeUselessDefs: true,
            },
            {
                removeEditorsNSData: true,
            },
            {
                removeEmptyAttrs: true,
            },
            {
                removeHiddenElems: true,
            },
            {
                removeEmptyText: true,
            },
            {
                removeEmptyContainers: true,
            },
            {
                removeViewBox: false,
            },
            {
                cleanupEnableBackground: true,
            },
            {
                convertStyleToAttrs: true,
            },
            {
                convertColors: true,
            },
            {
                convertPathData: true,
            },
            {
                convertTransform: true,
            },
            {
                removeUnknownsAndDefaults: true,
            },
            {
                removeNonInheritableGroupAttrs: true,
            },
            {
                removeUselessStrokeAndFill: true,
            },
            {
                removeUnusedNS: true,
            },
            {
                cleanupIDs: true,
            },
            {
                cleanupNumericValues: true,
            },
            {
                moveElemsAttrsToGroup: true,
            },
            {
                moveGroupAttrsToElems: true,
            },
            {
                collapseGroups: true,
            },
            {
                removeRasterImages: false,
            },
            {
                mergePaths: true,
            },
            {
                convertShapeToPath: true,
            },
            {
                sortAttrs: true,
            },
            {
                removeXMLNS: true,
            },
            {
                removeDimensions: true,
            },
            {
                removeStyleElement: true,
            },
            {
                removeScriptElement: true,
            }
        ]
    }
}
