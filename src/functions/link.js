// gerneriert relative url aus den categories und components

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'localhost:5173';

export function generateLink (componentName, categoryName) {
    return `/template/${categoryName}/${componentName}`;
}