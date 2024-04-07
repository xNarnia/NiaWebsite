import { Shard, ShardSpacer } from '../components/shard';
import '../css/particles.css'
import '../css/Home.css'
import { NavbarHiddenContext } from '../app';
import { useContext } from 'react';
import { Avatar } from '../components/avatar';

function Home() {
  const { navbarHidden, setNavbarHidden } = useContext(NavbarHiddenContext);
  setNavbarHidden(true);

  return (
    <>
      <div className="home">
        <div className="animation-wrapper">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
          </div>
          <div id="me">
              <Avatar /><br />
              Nia<br />Software Engineer<br />Software Test Engineer
          </div>
          <div className="content">
                <Shard linkTo='Portfolio' margin={-4}
                        points='65% 10%, 94% 25%, 98% 95%, 39% 90%, 17% 53%, 6% 0, 35% 3%' />
                        
                <Shard linkTo='Resume'
                        points='44% 0, 75% 13%, 100% 27%, 89% 73%, 65% 89%, 31% 99%, 0 66%, 16% 11%' />
                        
                <Shard linkTo='Github' margin={-4}
                        points='56% 2%, 84% 13%, 100% 27%, 90% 78%, 62% 91%, 8% 100%, 4% 51%, 18% 10%' />

                <ShardSpacer height={8}/>

                <Shard linkTo='Documentation'
                        points='57% 4%, 73% 17%, 97% 29%, 83% 76%, 52% 97%, 3% 99%, 9% 39%, 28% 13%' />
                        
                <Shard linkTo='Socials' margin={-4}
                        points='58% 11%, 78% 3%, 97% 29%, 78% 79%, 52% 97%, 12% 84%, 3% 31%, 31% 13%' />
                        
                <Shard linkTo='About'
                        points='51% 0, 77% 8%, 91% 35%, 95% 96%, 46% 100%, 15% 88%, 2% 52%, 22% 13%' />
        </div>
      </div>
    </>
  )
}

export default Home
