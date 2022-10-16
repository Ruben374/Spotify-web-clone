import * as C from "./styles";
const MusicCards = () => {
  return (
    <C.Container>
      <div className="music--card--top">
        <div className="card--container--name">Spotify playlists</div>
        <a className="see--all">ver tudo</a>
      </div>
      <div className="music--cards--cards">
        <div className="card">
          <div className="cardTop">
            <img src="https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg" />
          </div>
          <div className="cardBottom">
          <span className="title">fulano</span>
            <span className="description">isso isso...</span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <img src="https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg" />
          </div>
          <div className="cardBottom">
          <span className="title">fulano</span>
            <span className="description">isso isso...</span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <img src="https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg" />
          </div>
          <div className="cardBottom">
          <span className="title">fulano</span>
            <span className="description">isso isso...</span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <img src="https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg" />
          </div>
          <div className="cardBottom">
          <span className="title">fulano</span>
            <span className="description">isso isso...</span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <img src="https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg" />
          </div>
          <div className="cardBottom">
            <span className="title">fulano</span>
            <span className="description">isso isso...</span>
          </div>
        </div>
      </div>
    </C.Container>
  );
};

export default MusicCards;
