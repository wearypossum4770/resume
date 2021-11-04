/** @format */

export default function ItemList() {
  const displayedItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

{
  /* <ItemList items={displayedItems}/> */
}
