export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .then((data) => [data.origin, data.author, data.content])
    .catch((error) => console.log(error));
};

// export async function getPoetry() {
//     try {
//         const response = await fetch('https://v1.jinrishici.com/all.json');
//         const data = await response.json();
//         return [data.origin, data.author, data.content];
//     } catch (error) {
//         console.log(error);
//     }
// }
