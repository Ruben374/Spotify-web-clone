import * as C from "./styles";
import MusicCards from "../MusicCards";
const PlayList = () => {
  return (
    <C.PlaylistContainer>
      <C.Playlists>
        <C.UserPlaylists>
          <span className="title">Boa noite</span>
          <C.ItensContainer>
            <C.Item>
              <img src="https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699" />
              <span>DAMN</span>
            </C.Item>
            <C.Item>
              <img src="https://1.bp.blogspot.com/-AYyqLMO7p_E/YHatJATEjiI/AAAAAAAALoc/gzUvBY5Hl08GX-vHgmQINKuqnYf8PNfhQCLcBGAsYHQ/s400/Orochi%2B-%2BLobo%2B%2528feat.%2BMc%2BPoze%2Bdo%2BRodo%2529.jpg" />
              <span>LOBO</span>
            </C.Item>
            <C.Item>
              <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/7/7b/Graduation_%28%C3%A1lbum_de_Kanye_West%29.jpg/220px-Graduation_%28%C3%A1lbum_de_Kanye_West%29.jpg" />
              <span>"GÉNIO" WEST</span>
            </C.Item>
            <C.Item>
              <img src="https://pbs.twimg.com/profile_images/1544846970405232641/NObXke9__400x400.jpg" />
              <span>FELIPE RET</span>
            </C.Item>
            <C.Item>
              <img src="https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/03/27/840716/20200327134639956777a.jpg" />
              <span>OROCHI</span>
            </C.Item>
            <C.Item>
              <img src="https://cdns-images.dzcdn.net/images/cover/f45c8916970597d390313833a9db0c61/264x264.jpg" />
              <span>j COLE</span>
            </C.Item>
          </C.ItensContainer>
        </C.UserPlaylists>
        <MusicCards />
      </C.Playlists>
    </C.PlaylistContainer>
  );
};

export default PlayList;
