export const categories = [
    { _id: "6b21ca3eeb7f6fbccd471811", name: "Informatique" },
    { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    { _id: "6b21ca3eeb7f6fbccd471825", name: "Electromenager" }
  ];
  
  export function getCategories() {
    return categories;
  }
  
  export function getSelectCategoriesList() {
    return categories.map(c => ({ name: c.name, value: c._id }));
  }