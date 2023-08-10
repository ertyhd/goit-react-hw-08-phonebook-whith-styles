import paralax from './paralax.module.scss';

// import { useLottie } from 'lottie-react';
// import comp from './comp.json';

// const style = {
//   height: 300,
// };

const StartPage = () => {
  // const options = {
  //   animationData: comp,
  //   setSpeed: 2,
  //   loop: true,
  //   autoplay: true,
  // };
  // const { View } = useLottie(options, style);
  return (
    <div className={paralax.container}>
      <div className={paralax.logo}></div>
      <section className={paralax.layers}>
        <div className={paralax.layers__container}>
          <div className={`${paralax.liyers__item} ${paralax.liers_1}`}></div>
          <div className={`${paralax.liyers__item} ${paralax.liers_2}`}></div>
          <div className={`${paralax.liyers__item} ${paralax.liers_3}`}></div>
          <div className={`${paralax.liyers__item} ${paralax.liers_4}`}></div>
          <div className={`${paralax.liyers__item} ${paralax.liers_5}`}></div>
          <div className={`${paralax.liyers__item} ${paralax.liers_6}`}></div>
          <div className={`${paralax.liyers__item} ${paralax.liers_7}`}></div>
        </div>
      </section>
    </div>
  );
};

export default StartPage;
