import NavbarRoute from './templates/NavbarRoute'
import bg from '../img/bg-bots.jpg'
import StyledCol from './templates/StyledCol'
import { Container, Row } from 'react-bootstrap'

const Bots = () => <NavbarRoute BackgroundImage={bg} Element={
  <>
    <Container className='bots'>
      <Row>
        <h1>Feature-rich, Powerful Bots</h1>
        <StyledCol lg={12}>
          <strong><i>Build and create engaging software for users to increase engagement and interactivity.<br />
          Utilize existing data to enhance statistics and generate performance graphs.</i></strong>

          <ul>
            <li>
              Built and maintained database for various software with sharded resources
            </li>
            <li>
              Developed image generation & manipulation software to allow users creative ways to display image data
            </li>
            <li>
              Emphasis on convenient and user-friendly systems to help ease & promote engagement
            </li>
            <li>
              Collage image generator system utilizing the Ethereum blockchain to pull image data
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h3>Ribombot</h3>
          <ul>
            <li>
              User Profile image generator & engagement bot.
            </li>
            <li>
              Reward system for users based on community activity with redeemable physical rewards.
            </li>
            <li>
              Easy-to-use configuration system for users to customize profile image, theme, and quotations.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h3>Tyrantron</h3>
          <ul>
            <li>
              Configurable, custom bot built for automated moderation.
            </li>
            <li>
              Configurable filters on a per community basis.
            </li>
            <li>
              Custom security features for special needs based on my personal community.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h3>Quilt + Kin</h3>
          <ul>
            <li>
              NFT Portfolio Image Generator bot.
            </li>
            <li>
              Accesses blockchain for NFT collections to cache collection's images + metadata assets.
            </li>
            <li>
              User-generated collages of their NFT portfolios based on ENS or wallet address.
            </li>
            <li>
              User-generated collages of specific NFT traits based on metadata.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h3>Ambibot</h3>
          <ul>
            <li>
              Text-based chat channel engine for creating custom games where community members can participate together.
            </li>
            <li>
              Generic party recruitment system, lobby organizer, and simplified menu system.
            </li>
            <li>
              Careful architecture to ease creation of text-based games through a powerful, abstracted framework.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h3>Delibot</h3>
          <ul>
            <li>
              "Tradable present" generator for users to create presents to give to one another.
            </li>
            <li>
              Disguises redeemable game codes as text-based "presents" with descriptive 
              identifiers hinting at what's inside the gift.
            </li>
            <li>
              Simplified menu system for data entry.
            </li>
          </ul>
        </StyledCol>
      </Row>
    </Container>
  </>
} />

export default Bots