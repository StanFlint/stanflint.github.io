<script lang="ts">
  import hexboisLogo from '$lib/image/hexbois-logo.png';
  import voxorpLogo from '$lib/image/voxorp-logo.png';
</script>

<header>
    <h1>Stan Flint</h1>
    <h2>Scottish indie game developer</h2>
    <div class="social-links">
        <a href="https://github.com/StanFlint" title="GitHub" target="_blank" rel="noreferrer" class="github"></a>
        <a href="https://twitter.com/StanFlintDev" title="Twitter" target="_blank" rel="noreferrer" class="twitter"></a>
        <a href="https://www.youtube.com/channel/UCdznhGoKl0uCv__ZN7oETtQ" title="YouTube" target="_blank" rel="noreferrer" class="youtube"></a>
    </div>
</header>

<main>
    <section class="hexbois">
        <a href="https://hexbois.com" target="_blank" rel="noreferrer">
          <img class='project-title-img' src={hexboisLogo} alt="HEX BOIS">
        </a>

        <div class="image screenshot1"></div>
        <div class="image screenshot2"></div>
        <div class="image screenshot3"></div>
        <div class="image screenshot4"></div>

        <p>
            Build your empire of hexagons! Destroy other players in fast paced multiplayer battles. Manage your money, defences and enemies as your empire grows!
        </p>

        <p>
            With its simple yet addictive gameplay, HEX BOIS has reached <b>over 500,000 players</b>. Purchase hexagons to place on the board, making sure to balance your production of cash-flow with your defences.
        </p>

        <h3>Account system</h3>
        <p>
            HEX BOIS has its own accounts system built on Google's SSO. Players with an account are able to customize the colour of their hexagons as well as purchase 'skins' in the <a href="https://hexbois.com/shop" target="_blank">shop</a> to add images to their hexagons. These purchases help the game's development. The account system also allows for fine tune moderation controls within the game as well as other cool features like switching devices during a match.
        </p>
        <p>
            To keep the barrier of entry to play as low as possible, accounts are optional, players are encouraged to create one, but all gameplay is available to 'guests' and playing is as easy as picking a name and pressing play!
        </p>

        <h3>Mobile compatibility</h3>
        <p>
            With a modern, responsive website HEX BOIS fully supports the mobile gaming experience, all from within the browser, on the same website as desktop players. This means HEX BOIS is available to everyone, from the same codebase!
        </p>

        <p>
            <b>HEX BOIS is free to play and available immediately in-browser! Check it out <a href="https://hexbois.com">hexbois.com</a></b>
        </p>
    </section>
    <section class="voxorp">
      <a href="https://voxorp.com" target="_blank" rel="noreferrer">
        <img class='project-title-img' src={voxorpLogo} alt="VOXORP">
      </a>
        <div class="image screenshot3"></div>
        <div class="image screenshot2"></div>
        <div class="image screenshot1"></div>

        <p>With 17 content updates since its release, Voxorp has accrued <b>over 1,000,000 minutes</b> of total play time. The game focuses on giving players tools to create their own world in Voxorp's massive open multiplayer world.</p>

        <p>The game is built with a custom physics and networking engine developed from scratch for Voxorp. This gives the game the capabilities to run such a large game world, synced between players from all around the globe.</p>

        <b>Voxorp has three main elements of gameplay</b>
        <ul>
            <li>
                <b>Spaceships.</b> As you progress through the game your ship grows and provides more opportunity to customize its functionality with 'modules'
            </li>
            <li>
                <b>Base building.</b> Using the resources you collect in the game, you can create a base to claim your part of the map. Bases are complex, they require their own power system and defences
            </li>
            <li>
                <b>Alliances. </b>The robust alliance system allows players from around the world to collaborate on designing a base, defending their territory and battling it out with other alliances in massive space battles
            </li>
        </ul>

        <p>
            <b>Voxorp is free to play and available immediately in-browser! Check it out <a href="https://voxorp.com">voxorp.com</a></b>
        </p>
    </section>
</main>

<div class="filler"></div>

<footer>
    <div>
        <h3>Contact</h3>
        <a href="mailto:hello@stanflint.dev">hello@stanflint.dev</a>
    </div>
    <div>
        <h3>Socials</h3>
        <a href="https://github.com/StanFlint">GitHub</a>
        <a href="https://twitter.com/StanFlintDev">Twitter</a>
        <a href="https://www.youtube.com/channel/UCdznhGoKl0uCv__ZN7oETtQ">YouTube</a>
    </div>
    <div>
        <h3>Legal</h3>
        <a href="https://hexbois.com/privacy">Privacy</a>
        <a href="https://hexbois.com/terms">Terms</a>
    </div>
</footer>

<style lang="scss">
@font-face {
  font-family: Poppins;
  src: url("$lib/font/Poppins-Regular.ttf");
}

@font-face {
  font-family: Poppins;
  font-weight: 700;
  src: url("$lib/font/Poppins-Bold.ttf");
}

header {
  h1 {
    margin-top: 1rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-weight: normal;
  }

  .social-links {
    * {
      @extend %social-icon;

      display: inline-block;
      margin-right: 0.6rem;
    }

    .github {
      &::before {
        background-image: url("$lib/image/github-icon.png");
      }
    }

    .twitter {
      &::before {
        background-image: url("$lib/image/twitter-icon.png");
      }
    }

    .youtube {
      &::before {
        background-image: url("$lib/image/youtube-icon.png");
      }
    }
  }
}

%social-icon {
  @extend %icon-link;

  width: 40px;
  height: 40px;
}

%icon-link {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
  }
}

footer {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;

  a {
    display: block;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.1rem;

    h3,
    a {
      padding-bottom: 0.4rem;
    }
  }
}

.project-title-img {
  height: 40px;
}

.voxorp,
.hexbois {
  > a {
    text-decoration: none !important;
  }

  h2 {
    font-size: 2.5rem;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      background-size: 100%;
      background-repeat: no-repeat;
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0.2rem;
    }
  }
}

.voxorp {
  background-color: #fff0f8;

  .screenshot1 {
    background-image: url("$lib/image/voxorp-screenshot-1.webp");
  }

  .screenshot2 {
    max-height: 10rem;
    height: 24vw;
    background-image: url("$lib/image/voxorp-screenshot-2.webp");
  }

  .screenshot3 {
    background-image: url("$lib/image/voxorp-screenshot-3.webp");
  }

  h2 {
    // @extend %voxorp-font;

    &::before {
      background-image: url("$lib/image/voxorp-icon.png");
    }
  }
}

.hexbois {
  background-color: #f0fbff;

  .screenshot1 {
    background-image: url("$lib/image/hexbois-screenshot-1.webp");
  }

  .screenshot2 {
    background-image: url("$lib/image/hexbois-screenshot-2.webp");
  }

  .screenshot3 {
    background-image: url("$lib/image/hexbois-screenshot-3.webp");
  }

  .screenshot4 {
    height: 28vw;
    max-height: 11.5rem;
    background-image: url("$lib/image/hexbois-screenshot-4.webp");
  }

  h2 {
    // @extend %hexbois-font;

    &::before {
      background-image: url("$lib/image/hexbois-icon.png");
    }
  }
}

.image {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  float: right;
  clear: both;
  margin: 0 0 1rem 1rem;
  border-radius: 8px;
  max-width: 16rem;
  max-height: 9rem;
  height: 22vw;
  width: 40vw;
}

:global(body) {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

header,
footer,
main {
  margin: auto;
  padding: 1.5rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
}

section {
  border-radius: 10px;
  padding: 1rem;
  margin: 1.5rem 0;
}

.filler {
  flex-grow: 1;
}

h1,
h2,
h3 {
  margin: 0;
}

h1 {
  font-weight: bold;
  font-size: 2rem;
}
</style>