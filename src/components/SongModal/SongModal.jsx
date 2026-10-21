import { useEffect } from 'react';
import {
  ArtistPhoto,
  ArtistCard,
  ArtistList,
  CloseButton,
  DetailCard,
  DetailGrid,
  DetailLabel,
  DetailValue,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SongArtist,
  SongInfo,
  AlbumArtwork,
  SpotifyLink,
  SpotifyUnavailable,
  VisualLabel,
} from './SongModal.style';

function SongModal({ song, onClose }) {
  const artistNames = song.artist.split(',').map((artist) => artist.trim());

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <ModalBackdrop
      onMouseDown={(event) => {
        const clickedBackdrop = event.target === event.currentTarget;

        if (clickedBackdrop) {
          onClose();
        }
      }}
    >
      <ModalContent role="dialog" aria-modal="true" aria-labelledby="song-modal-title">
        <CloseButton type="button" onClick={onClose} aria-label="Закрити вікно">
          ×
        </CloseButton>
        <AlbumArtwork
          $image={song.albumArtUrl}
          role="img"
          aria-label={`Обкладинка альбому «${song.title}»`}
        >
          {!song.albumArtUrl && <VisualLabel>Фото обкладинки альбому</VisualLabel>}
        </AlbumArtwork>

        <ModalHeader>
          <ModalTitle id="song-modal-title">{song.title}</ModalTitle>
        </ModalHeader>

        <SongInfo>
          <DetailLabel>
            {artistNames.length > 1 ? 'Виконавці' : 'Виконавець'}
          </DetailLabel>
          <ArtistList>
            {artistNames.map((artist, index) => (
              <ArtistCard key={artist}>
                <ArtistPhoto
                  $image={song.artistPhotoUrls?.[index]}
                  role="img"
                  aria-label={`Фото виконавця ${artist}`}
                >
                  {!song.artistPhotoUrls?.[index] && (
                    <VisualLabel>Фото виконавця</VisualLabel>
                  )}
                </ArtistPhoto>
                <SongArtist>{artist}</SongArtist>
              </ArtistCard>
            ))}
          </ArtistList>
        </SongInfo>

        <DetailGrid>
          <DetailCard>
            <DetailLabel>Прослуховування за тиждень</DetailLabel>
            <DetailValue>{song.listens}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailLabel>Місце в рейтингу</DetailLabel>
            <DetailValue>#{song.rank}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailLabel>Дата виходу</DetailLabel>
            <DetailValue>{song.releaseDate || 'Додайте дату'}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailLabel>Альбом</DetailLabel>
            <DetailValue>{song.album || 'Додайте назву альбому'}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailLabel>Тривалість</DetailLabel>
            <DetailValue>{song.duration || 'Додайте тривалість'}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailLabel>Жанр</DetailLabel>
            <DetailValue>{song.genre || 'Додайте жанр'}</DetailValue>
          </DetailCard>
        </DetailGrid>
        {song.spotifyTrackUrl && (
          <SpotifyLink
            href={song.spotifyTrackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Відкрити трек у Spotify
          </SpotifyLink>
        )}
        {!song.spotifyTrackUrl && (
          <SpotifyUnavailable>Пряме посилання на трек поки не додано</SpotifyUnavailable>
        )}
      </ModalContent>
    </ModalBackdrop>
  );
}

export default SongModal;
