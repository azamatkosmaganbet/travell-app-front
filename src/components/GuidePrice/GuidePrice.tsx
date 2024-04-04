import React from 'react'
import "./GuidePrice.scss"
import { Card, CardItem } from '../UI/Card/Card';
import { Title } from '../UI/Title/Title';
const GuidePrice = () => {
  return (
    <div className="guide-price">
      <div className="guide-price-content">
        <Title variant="h2" color="#fff" className="guide-price-content-title">
          Не важно, какого локали Вы выберете и куда отправитесь в путешествие.
          Цена — едина.
        </Title>

        <p className="guide-price-content-desc">
          Необязательно выбирать только одну конкретную прогулку из списка.
          Локали с удовольствием подберет для вас персональную программу,
          которая может быть сложена сразу из нескольких прогулок. А может вы
          получите вовсе что-то эксклюзивное и секретное, чего нет на сайте!
          Насчет стоимости переживать не стоит - все просто и прозрачно.
          Итоговая цена сложится автоматически, отталкиваясь от единого тарифа:
        </p>

        <div className="guide-price-content-cards">
          <Card
            className="guide-price-content-cards-item"
            type="price"
            color="rgb(255, 203, 56)"
          >
            <CardItem
              title="Полдня"
              description="Чаще всего, 3-4 часа"
              variant="price"
              price={99}
            />
          </Card>

          <Card
            className="guide-price-content-cards-item"
            type="price"
            color="rgb(255, 203, 56)"
          >
            <CardItem
              title="Полдня"
              description="Чаще всего, 3-4 часа"
              variant="price"
              price={99}
            />
          </Card>

          <Card
            className="guide-price-content-cards-item"
            type="price"
            color="rgb(255, 203, 56)"
          >
            <CardItem
              title="Полдня"
              description="Чаще всего, 3-4 часа"
              variant="price"
              price={99}
            />
          </Card>

          <Card
            className="guide-price-content-cards-item"
            type="price"
            color="rgb(255, 203, 56)"
          >
            <CardItem
              title="Полдня"
              description="Чаще всего, 3-4 часа"
              variant="price"
              price={99}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GuidePrice