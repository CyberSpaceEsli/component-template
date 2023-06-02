// gerneriert relative url aus den categories und components
export function generateLink (componentName, categoryName) {
    return `http://localhost:5173/${categoryName}/${componentName}`;
}