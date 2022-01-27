import React from "react";
import "./Home.css";
import Product from "./Product";
import shoping from "./shoping-image.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={shoping}
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Carlton London
            Black Victorian Crop Fitted Top"
            price={11.96}
            rating={5}
            image="https://img.search.brave.com/I_xu-xFA0naRaXSd0wNIOv5za6H6KjJQi27wMU9l84A/rs:fit:683:1024:1/g:ce/aHR0cDovL2ZlZWRp/bnNwaXJhdGlvbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDUvUGFydHkt/RHJlc3Nlcy1Gb3It/V29tZW4tQ3V0ZS5q/cGc"
          />
          <Product
            id="49538094"
            title="KASSUALLY :- Blue Floral Cinched Waist Smocked Top"
            price={239.0}
            rating={4}
            image="https://img.search.brave.com/79X6RQ7130g-HyMxLT4_TYMqVIPumaQcs8bnBT-yV8M/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5taXNzZ3VpZGVk/LmNvbS9pL21pc3Nn/dWlkZWQvVEpDMTM5/NDNfMDE_Zm10PWpw/ZWcmZm10LmpwZWcu/aW50ZXJsYWNlZD10/cnVlJiRwcm9kdWN0/LXBhZ2VfX21haW4t/LTJ4JA"
          />
           <Product
            id="90829332"
            title="
            SASSAFRAS
            Black Semi-Sheer Longline A-Line Top"
            price={1094.98}
            rating={4}
            image="https://img.search.brave.com/G3EyDtnD43wTD97Q93O-ad5D_PnsoNqb1zJ4MXHaz4k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWdp/eC5idXN0bGUuY29t/L3VwbG9hZHMvaW1h/Z2UvMjAxOS82LzE0/L2RlNTM3MmVhLTg3/OTAtNDc2Yi05NDlk/LWMxMWEzNDM0ZmE1/Mi0zOTkxMDIwOTE0/XzJfNV8xLmpwZw"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Carlton London
            Black Victorian Crop Fitted Top"
            price={199.99}
            rating={3}
            image="https://img.search.brave.com/VIihVSeDJepveR0HKbvfspBUAPBHEGtbotxSq95bHNM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMTNj/Y2I5NDItNzk4Yy00/MGFjLWIyMzAtZWMx/OWM5ZmE0NzJlXzEu/ODEwNjg3MTJlYjgx/M2QwMGJkMTQ0YmYy/ODRkOTZhYmIuanBl/Zw"
          />
          <Product
            id="23445930"
            title="Miss Chase
            Peach-Coloured Floral Pleated Maxi Top"
            price={98.99}
            rating={5}
            image="https://img.search.brave.com/vV-r2I9oi1aHg7dmchAVHUaktfbHEFudjb8YPLUHwds/rs:fit:600:800:1/g:ce/aHR0cHM6Ly9raW5n/LmNhbGxtZWxhZHku/Y29tLzkyMy10aGlj/a2JveF9kZWZhdWx0/L3N3ZWV0aGVhcnQt/bG9uZy1ldmVuaW5n/LWRyZXNzZXMtZm9y/LXdvbWVuLXdpdGgt/cGVhcmwtd2Fpc3Qu/anBn"
          />
          <Product
            id="3254354345"
            title="Sera Pink , Multicoloured Floral Printed Puff Sleeves Chiffon Blouson Crop Top"
            price={598.99}
            rating={4}
            image="https://img.search.brave.com/1pWdj3iSIKxT-aZ9B6KlCAB8KqE2IRguyUVQTdD5uyk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOGFh/YTk4OTItM2QyNS00/MTNiLWI5ZjQtZWZj/Y2M4MGQzMDhlXzEu/N2E2ZjRmMGJhOWUw/OTlhZThjMTQzMWU1/ZjY0NTI5NzQuanBl/Zw"
          />
        </div>

        <div className="home__row">
        <Product
            id="90829332"
            title="
            SASSAFRAS
            Black Semi-Sheer Longline A-Line Top"
            price={1094.98}
            rating={4}
            image="https://img.search.brave.com/G3EyDtnD43wTD97Q93O-ad5D_PnsoNqb1zJ4MXHaz4k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWdp/eC5idXN0bGUuY29t/L3VwbG9hZHMvaW1h/Z2UvMjAxOS82LzE0/L2RlNTM3MmVhLTg3/OTAtNDc2Yi05NDlk/LWMxMWEzNDM0ZmE1/Mi0zOTkxMDIwOTE0/XzJfNV8xLmpwZw"
          />
           <Product
            id="90829332"
            title="
            SASSAFRAS
            Black Semi-Sheer Longline A-Line Top"
            price={1094.98}
            rating={4}
            image="https://img.search.brave.com/It2U27zXGI0bpWnoa5Z00BCCw7u6AfxeKcLrv8WJqX8/rs:fit:600:799:1/g:ce/aHR0cHM6Ly93d3cu/ZWxpdGVvY2Nhc2lv/bnMuY28uemEvY29u/dGVudC9pbWFnZXMv/dGh1bWJzLzAwMjE1/NzNfZ2xpdHRlci13/cmFwLWNhbWktbWF4/aS1mb3JtYWwtZHJl/c3MuanBlZw"
          />
          <Product
            id="90829332"
            title="
            SASSAFRAS
            Black Semi-Sheer Longline A-Line Top"
            price={1094.98}
            rating={4}
            image="https://img.search.brave.com/0eUapP6siP1U3_R_wOva-B5cHtGydJDM37wC9RPaBwI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvYWRi/MWQ3OTQtNzAwZS00/Y2FhLTg5Y2ItY2Jh/MDRjMGYzZGMxXzEu/NTk0MjFhMTlkYmZj/MTQxMTA2ODQwZGMx/NWRkMGZmNTcuanBl/Zw"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;