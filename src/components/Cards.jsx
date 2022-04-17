import Card from "./Card";

export default function Cards() {

  return (
    <div className="container">
      <div className="row">
        <Card
          title="Card Title"
          text="Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen"
          link="//yandex.ru"
        >
          <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=Netology" alt="" />
        </Card>
        <Card
          title="Card Title 2"
          text="2 Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen"
          link="//yandex.ru"
        >
        </Card>
      </div>
    </div>
  );
}
