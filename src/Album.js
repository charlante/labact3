import "./App.css";
import Products from "./Products";

function Album(props) {
  const chunks = Array.from(
    { length: Math.ceil(props.albumItems.length / 3) },
    (_, index) => props.albumItems.slice(index * 3, (index + 1) * 3)
  );

  return (
    <div>
      <div className="banner">
        <img src="./photos/banner.png" alt="BlackPink" width="100%" />
      </div>

      {chunks.map((chunk, index) => (
        <div key={index} className="grid">
          <Products products={chunk} />
        </div>
      ))}
    </div>
  );
}
export default Album;
