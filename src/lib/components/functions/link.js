// gerneriert relative url aus den categories und components

export function generateLink (componentName, categoryName) {
    return `/template/${categoryName}/${componentName}`;
}