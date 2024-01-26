// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// import { useState } from "react";

// const App = () => {
//   const [alertVisible, setAlertVisible] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisible(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// };

// export default App

export interface IProduct {
  name: string;
  quantity: number;
  price: number;
}

import { useState } from "react";
const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [formValues, setFormValues] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();

    const formData = new FormData(event.currentTarget);
    let name = formData.get("name");
    let quantity = formData.get("quantity");
    let price = formData.get("price");

    console.log(name, quantity, price);
    console.log(typeof quantity);

    
    const newProducts: IProduct = {
      name: name!.toString(),
      quantity: Number(quantity),
      price: Number(price),
    };
   


    setProducts([...products, newProducts]);

  
     name = "";
     quantity = "";
     price = "";
  };

  return (
    <div>
      <h1>InventoryForm</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Item Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
          required
        ></input>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formValues.quantity}
          onChange={(e) =>
            setFormValues({ ...formValues, quantity: e.target.value })
          }
          required
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formValues.price}
          onChange={(e) =>
            setFormValues({ ...formValues, price: e.target.value })
          }
          required
        ></input>
        <button type="submit">Add Item</button>
      </form>

      <h1>InventoryTable</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App
