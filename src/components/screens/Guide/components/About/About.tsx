import React, { FC } from "react";
import "./About.scss";
import { Title } from "../../../../UI/Title/Title";
import { CardItem, Card } from "../../../../UI/Card/Card";
import { IGuide } from "../../../../../models/IGuide";

interface IAbout {
  guide: IGuide;
}

const About: FC<IAbout> = ({ guide }) => {
  return (
    <div className="guide-about">
      <Card className="guide-about-desc">
        <CardItem
          title="Как мне довелось здесь оказаться"
          description="Стамбул был подарком на мой день рождения. Первый раз я приехала сюда всего на несколько дней и зная только то что тут два континента и пьют чай. Приехала и влюбилась. Я обожаю все в этом городе, потрясающее смешение культур и ментальностей, богатую историю, вкуснейшую кухню и невероятную энергию воспетую в многих произведениях. И даже прожив здесь столько времени, я все ещё ощущаю воодушевление и вдохновение просто гуляя по улочкам и наслаждаясь видами Босфора. Здесь так просто чувствовать себя счастливой..."
        />
      </Card>
      <div className="guide-about-hobbies">
        <Card className="guide-about-hobbies-inner">
          <div className="guide-about-hobbies-info">
            <Title variant="h5" type="regular">
              Мои интересы
            </Title>

            <div className="guide-about-hobbies-info-content">
              {guide.interests?.map((interes) => (
                <Title variant="h5" type="button">
                  {interes}
                </Title>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
