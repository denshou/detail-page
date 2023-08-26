import logo from "./logo.svg";
import "./App.css";
import { styled } from "styled-components";
import Nav from "./components/Nav/Nav";
import Description from "./components/Details/Description";
import ColorSelect from "./components/ColorSelect/ColorSelect";
import AddBtn from "./components/Button/AddBtn";
import SizeSelect from "./components/SizeSelect/SizeSelect";

function App() {
  return (
    <div className="App">
      <Nav />
      <ImgBox>
        <ImgBigLeft>
          <img className="img-big" src="insta.png" alt="" />
        </ImgBigLeft>
        <div>
          <ImgSm>
            <img className="img-sm" src="fall.jpg" alt="" />
          </ImgSm>
          <ImgSm>
            <img className="img-sm" src="lulu.jpg" alt="" />
          </ImgSm>
        </div>
        <ImgBigRight>
          <img className="img-big" src="bed.png" alt="" />
        </ImgBigRight>
      </ImgBox>
      <ItemDetail>
        <Description />

        <Buy>
          <div className="title-price">$192</div>
          <br />
          <div>★★★★☆ 117reviews</div>
          <br />
          <form>
            <div>
              <p>Color</p>
              <ColorSelect />
            </div>
            <br />
            <div>
              <p>Size</p>
              <SizeSelect />
            </div>
            <AddBtn>Add to bag</AddBtn>
          </form>
        </Buy>
      </ItemDetail>
    </div>
  );
}

export default App;

const ImgBox = styled.div`
display: flex;
width: 100vw;
height: 39rem;
`

const ImgBigLeft = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  margin: 1rem 1rem 2rem 3rem;
  height: 37rem;
  width: 40vw;
`;
const ImgBigRight = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  margin: 1rem 3rem 2rem 1rem;
  height: 37rem;
  width: 40vw;
`;
const ImgSm = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 17.5rem;
  overflow: hidden;
  border-radius: 1rem;
  margin: 1rem 1rem 2rem 1rem;
`;

const ItemDetail = styled.div`
  display: flex;
  margin-top: 3rem;
`;
const Buy = styled.div`
  text-align: left;
  border-left: 1px solid #dfdfdd;
  height: 33rem;
  margin-left: 2rem;
  margin-right: 3rem;
  padding-left: 2rem;
  width: 30.2rem;
`;
