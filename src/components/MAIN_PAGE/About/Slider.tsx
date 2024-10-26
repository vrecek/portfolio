import InfoElement from './InfoElement'
import SliderButtons from './SliderButtons'


const Slider = () => {
   return (
      <div className="wrap">

         <div className="move-wrap">

            <div className="moving">

               <InfoElement moveXPerc={ 95 } date='2020 December' text='Around that time I was watching some videos on a YouTube and a C++ video has showed up. I have got interested in it, so I watched it more and more. That is how this journey has started.' chartNum={ 2020 }  />
               <InfoElement moveXPerc={ 50 } date='2021 June' text='After some break, I have decided to try the HTML. I enjoyed it, so I was making project after project. It obviously was not looking good, but at that time it was really something.' chartNum={ 2021 } />
               <InfoElement moveXPerc={ 75 } date='2021 September' text="Since C++ was my first language, I wanted to do more programming, besides regular markup language. That's why i started getting into PHP+Javascript. I made very small projects back then with it." chartNum={ 2021 } />
               <InfoElement moveXPerc={ 95 } date='2021 December' text="I started making JS projects too. I realised that you need a framework/library for the frontend. I've decided to choose React. I also switched from PHP to Node, just to use only one language." chartNum={ 2021 } />
               <InfoElement date='2022 + Present' text="I was not making anything without React. Also backend / fullstack projects got into it, same as git + supersets: Typescript and SCSS. I am and probably will be creating projects with these tools from now on" chartNum={ 2022 } />

            </div>

         </div>

         <SliderButtons radioNum={ 5 } />

      </div>
   )
}


export default Slider