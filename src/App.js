import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav-menu">
        <span>Men</span>
        <span> | </span>
        <span>Clothing</span>
        <span> | </span>
        <span>Basic Tee 6-Pack</span>
      </div>
      <div className="img-box">
        <div className="img-big-box__left">
          <img className="img-big" src="insta.jpg" alt="" />
        </div>
        <div>
          <div className="img-sm-box">
            <img className="img-sm" src="fall.jpg" alt="" />
          </div>
          <div className="img-sm-box">
            <img className="img-sm" src="lulu.jpg" alt="" />
          </div>
        </div>
        <div className="img-big-box__right">
          <img className="img-big" src="bed.png" alt="" />
        </div>
      </div>
      <div className="item-detail">
        <div className="description">
          <h1>Basic Tee 6-Pack</h1>
          <p>
            촘촘하게 짜여진 면 100% 코마사 16수 싱글 저지 원단을 사용해 편안한
            착용감을 제공한다. 적당한 폭과 깊이의 네크라인은 텐션과 복원력을
            갖춘 스판 립 원단을 바디 원단과 밸런스를 맞춰 사용했다. 적당히
            드롭된 어깨선과 여유 있는 릴렉스 핏으로 트렌디한 실루엣을 연출하며
            두 장을 하나에 구성해 활용도가 높은 제품이다. 촘촘하게 짜여진 면
            100% 코마사 16수 싱글 저지 원단을 사용해 편안한 착용감을 제공한다.
            적당한 폭과 깊이의 네크라인은 텐션과 복원력을 갖춘 스판 립 원단을
            바디 원단과 밸런스를 맞춰 사용했다. 적당히 드롭된 어깨선과 여유 있는
            릴렉스 핏으로 트렌디한 실루엣을 연출하며 두 장을 하나에 구성해
            활용도가 높은 제품이다.
          </p>
          <h2>상세 설명</h2>
          <p>- </p>
          <p>- </p>
          <p>- </p>
          <p>- </p>
        </div>

        <div className="buy">
          <h1>$192</h1>
          <div>★★★★☆ 117reviews</div>
          <form>
            <div>
              <p>Color</p>
              <div className="form-color">
                <div className="color-radio-btn white">
                  <input
                    className="color-radio-white"
                    type="radio"
                    name="color"
                    value="white"
                    id="white"
                  />
                  <label htmlFor="white"></label>
                </div>
                <div className="color-radio-btn gray">
                  <input
                    className="color-radio-gray"
                    type="radio"
                    name="color"
                    value="gray"
                    id="gray"
                  />
                  <label htmlFor="gray"></label>
                </div>
                <div className="color-radio-btn black">
                  <input
                    className="color-radio-black"
                    type="radio"
                    name="color"
                    value="black"
                    id="black"
                  />
                  <label htmlFor="black"></label>
                </div>
              </div>
            </div>

            <div>
              <p>Size</p>
              <div className="form-radio-btn">
                <div className="row">
                  <div className="radio-btn">
                    <input type="radio" name="size" value="ssm" id="ssm" />
                    <label htmlFor="ssm">SSM</label>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" name="size" value="sm" id="sm" />
                    <label htmlFor="sm">SM</label>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" name="size" value="s" id="s" />
                    <label htmlFor="s">S</label>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" name="size" value="m" id="m" />
                    <label htmlFor="m">M</label>
                  </div>
                </div>

                <div className="row">
                  <div className="radio-btn">
                    <input type="radio" name="size" value="l" id="l" />
                    <label htmlFor="l">L</label>
                  </div>

                  <div className="radio-btn">
                    <input type="radio" name="size" value="xl" id="xl" />
                    <label htmlFor="xl">XL</label>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" name="size" value="xxl" id="xxl" />
                    <label htmlFor="xxl">XXL</label>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" name="size" value="xxxl" id="xxxl" />
                    <label htmlFor="xxxl">XXXL</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="add-btn">Add to bag</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
