import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(5, 4, 12, 0.76);
  backdrop-filter: blur(8px);
`;

export const ModalContent = styled.div`
  position: relative;
  width: min(100%, 640px);
  max-height: min(90vh, 780px);
  overflow-y: auto;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: #e7e3f5;
  background: linear-gradient(145deg, #19162b, #0d0c18);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  text-align: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  overflow-wrap: anywhere;
`;

export const SongArtist = styled.p`
  margin: 6px 0 0;
  color: #b9b2ce;
  font-size: 14px;
`;

export const SpotifyLink = styled.a`
  display: block;
  width: fit-content;
  margin: 20px auto 0;
  padding: 10px 16px;
  border-radius: 999px;
  color: #101510;
  background: #1ed760;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #3be477;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }
`;

export const SpotifyUnavailable = styled.p`
  margin: 20px auto 0;
  color: #9691ad;
  font-size: 13px;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #e7e3f5;
  background: rgba(255, 255, 255, 0.06);
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  &:focus-visible {
    outline: 2px solid #c4b5fd;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    top: 20px;
    right: 20px;
  }
`;

export const AlbumArtwork = styled.div`
  display: grid;
  place-items: center;
  width: min(220px, 70%);
  aspect-ratio: 1;
  margin: 0 auto 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background:
    ${({ $image }) =>
      $image
        ? `url("${$image}") center / cover no-repeat`
        : 'radial-gradient(circle at 30% 25%, rgba(196, 181, 253, 0.3), transparent 45%), linear-gradient(145deg, #31254b, #171323)'};
`;

export const ArtistPhoto = styled.div`
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  background:
    ${({ $image }) =>
      $image
        ? `url("${$image}") center / cover no-repeat`
        : 'radial-gradient(circle at 35% 30%, #a78bfa, #443263 70%)'};
`;

export const VisualLabel = styled.span`
  max-width: 120px;
  padding: 8px;
  color: #c6bfd9;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-width: 0;
  margin-bottom: 24px;
  text-align: center;
`;

export const ArtistList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 160px;
  text-align: center;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailCard = styled.div`
  min-width: 0;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.035);
`;

export const DetailLabel = styled.p`
  color: #9691ad;
  font-size: 12px;
  line-height: 1.4;
`;

export const DetailValue = styled.p`
  margin-top: 6px;
  color: #f3f0fb;
  font-size: 15px;
  font-weight: 600;
  overflow-wrap: anywhere;
`;
