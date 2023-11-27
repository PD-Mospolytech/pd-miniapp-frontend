import { useState } from "react";
import "./App.css";
import Block from "./components/Block/Block";
import Section from "./components/Section/Section";
import mainLogo from "./logo.svg";

function App() {
   const [table, setTable] = useState("Нет таблиц");

   console.log(table);

   return (
      <div className="App">
         <Section>
            <div className="App__Title">
               <div className="Title__icon">
                  <img src={mainLogo} alt="Логотип" />
               </div>
               <h1>Проектная деятельность</h1>
            </div>

            <h2>Распределение студентов по проектам</h2>

            <div className="Uploader">
               <Block className="Upload-Projects">
                  <div className="Upload__item">
                     <div className="Upload-cover">
                        <i className="bi bi-boxes"></i>
                     </div>
                     <div className="Upload-info">
                        <h3>Таблица проектов</h3>
                        <button className="btn btn-badge btn_red">
                           Cкачать шаблон
                        </button>
                     </div>
                  </div>
                  <div className="Upload__item">
                     <button
                        className="btn"
                        type="submit"
                        onClick={() => console.log(table, 12)}
                     >
                        Загрузить
                     </button>
                  </div>
               </Block>

               <Block className="Upload-Students">
                  <div className="Upload__item">
                     <div className="Upload-cover">
                        <i className="bi bi-people"></i>
                     </div>
                     <div className="Upload-info">
                        <h3>Таблица студентов</h3>
                        <button className="btn btn-badge btn_red">
                           Cкачать шаблон
                        </button>
                     </div>
                  </div>
                  <div className="Upload__item">
                     <button className="btn">Загрузить</button>
                  </div>
               </Block>
            </div>

            <div className="w-full_center">
               <button className="btn" disabled>
                  Начать распределять
               </button>
            </div>
         </Section>
      </div>
   );
}

export default App;
