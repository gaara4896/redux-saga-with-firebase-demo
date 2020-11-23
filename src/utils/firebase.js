export const getElementsFromDocs = (querySnapshot) => {
    let elements = [];
    querySnapshot.forEach(function(doc) {
        elements.push({...doc.data(), id: doc.id});
    });
    return elements;
}
