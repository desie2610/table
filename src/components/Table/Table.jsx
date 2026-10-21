import { useState } from 'react';
import SongModal from '../SongModal/SongModal';
import { songImages } from '../../assets/songImages';
import {
  TableWrapper,
  TableHeader,
  TableTitle,
  TableDescription,
  TableContainer,
  StyledTable,
  TableHead,
  TableHeading,
  TableBody,
  TableRow,
  TableCell,
} from './Table.style';

const songs = [
  {
    rank: 1,
    title: 'ДИНАСТИЯ',
    artist: 'VILLIAN, madk1d',
    listens: '217 146',
    spotifyTrackUrl: 'https://open.spotify.com/track/6MtUSSf9h4s2lKkkkXdu5J',
    releaseDate: '24.07.2026',
    album: 'Красивое зло',
    duration: '2:30',
    genre: 'Hip-Hop/Rap',
  },
  {
    rank: 2,
    title: 'Дві весни',
    artist: 'Jerry Heil, Святослав Вакарчук',
    listens: '149 210',
    spotifyTrackUrl: 'https://open.spotify.com/track/1LqZGmuthue7GOtBp6hEmQ',
    releaseDate: '25.09.2026',
    album: 'Дві весни - Single',
    duration: '3:50',
    genre: 'Rock',
  },
  {
    rank: 3,
    title: 'ты в моих мыслях навсегда',
    artist: 'урал гайсин, снялцепи',
    listens: '137 711', 
    spotifyTrackUrl: 'https://open.spotify.com/track/3wOM6MY3KmA5470mfYbH6K',
    releaseDate: '19.12.2025',
    album: 'ты в моих мыслях навсегда - Single',
    duration: '1:58',
    genre: 'Hip-Hop/Rap',
  },
  {
    rank: 4,
    title: 'так п***й',
    artist: 'madk1d',
    listens: '116 863', 
    spotifyTrackUrl: 'https://open.spotify.com/track/1dpHnn6eh4Pz55UproSdJv',
    releaseDate: '21.03.2025',
    album: 'sexyswag',
    duration: '1:48',
    genre: 'Hip-Hop/Rap',
  },
  {
    rank: 5,
    title: 'Лампочки',
    artist: 'ARTIK & ASTI',
    listens: '116 688',
    spotifyTrackUrl: 'https://open.spotify.com/track/6c1ly1qdZbILblTz94usFG',
    releaseDate: '22.07.2021',
    album: 'Миллениум X',
    duration: '3:15',
    genre: 'Pop',
  },
  {
    rank: 6,
    title: 'Червоний мак',
    artist: 'Kolibri, Zlata Ko',
    listens: '115 421',
    spotifyTrackUrl: 'https://open.spotify.com/album/6Mc1Q37tOs8wb8kUMuoea3',
    releaseDate: '29.09.2026',
    album: 'Червоний мак - Single',
    duration: '3:29',
    genre: 'Pop',
  },
  {
    rank: 7,
    title: 'Німесил',
    artist: 'Шугар',
    listens: '113 625',
    spotifyTrackUrl: 'https://open.spotify.com/track/30sgJs4XDi5W9QuXmVTpwK',
    releaseDate: '18.09.2026',
    album: 'Сингл',
    duration: '2:13',
    genre: 'Pop',
  },
  {
    rank: 8,
    title: 'целоваться',
    artist: 'lightprey',
    listens: '101 774',
    spotifyTrackUrl: 'https://open.spotify.com/track/6MaOPCE6jAMxI4WfHCBmWn',
    releaseDate: '03.04.2026',
    album: 'Сингл',
    duration: '1:54',
    genre: 'Hip-Hop/Rap',
  },
  {
    rank: 9,
    title: '8 миля',
    artist: 'madk1d, VILLIAN',
    listens: '101 523',
    spotifyTrackUrl: 'https://open.spotify.com/track/67llqAFIyR6d6JMjDImDyU',
    releaseDate: '20.02.2026',
    album: '8 миля - Single',
    duration: '1:55',
    genre: 'Hip-Hop/Rap',
  },
  {
    rank: 10,
    title: 'ЗНАК',
    artist: 'Toxi$, Дора',
    listens: '94 551',
    spotifyTrackUrl: 'https://open.spotify.com/track/2O9gTMtQz4mSnn0z58o5x5',
    releaseDate: '24.07.2026',
    album: 'ЗНАК - Single',
    duration: '3:36',
    genre: 'Hip-Hop/Rap',
  },
];

function Table() {
  const [selectedSong, setSelectedSong] = useState(null);

  function openSong(song) {
    const songImagesForSong = songImages[song.rank];

    setSelectedSong({
      ...song,
      ...songImagesForSong,
    });
  }

  function handleSongKeyDown(event, song) {
    const isEnter = event.key === 'Enter';
    const isSpace = event.key === ' ';

    if (isEnter || isSpace) {
      event.preventDefault();
      openSong(song);
    }
  }

  return (
    <>
      <TableWrapper>
        <TableHeader>
          <div>
            <TableTitle>ТОП - 10 пісень в Spotify по прослуховуванню в Україні</TableTitle>
            <TableDescription>
              Огляд найпопулярніших треків за кількістю прослуховувань у країні протягом тижня.
            </TableDescription>
          </div>
        </TableHeader>

        <TableContainer>
          <StyledTable>
            <TableHead>
              <tr>
                <TableHeading>#</TableHeading>
                <TableHeading>Пісня</TableHeading>
                <TableHeading>Виконавець</TableHeading>
                <TableHeading>Прослуховування за тиждень</TableHeading>
              </tr>
            </TableHead>

            <TableBody>
              {songs.map((song) => (
                <TableRow
                  key={song.rank}
                  tabIndex={0}
                  aria-label={`Відкрити інформацію про пісню «${song.title}»`}
                  onClick={() => openSong(song)}
                  onKeyDown={(event) => handleSongKeyDown(event, song)}
                >
                  <TableCell>{song.rank}</TableCell>
                  <TableCell>{song.title}</TableCell>
                  <TableCell>{song.artist}</TableCell>
                  <TableCell>{song.listens}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </TableWrapper>
      {selectedSong && <SongModal song={selectedSong} onClose={() => setSelectedSong(null)} />}
    </>
  );
}

export default Table;
