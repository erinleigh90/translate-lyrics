import { useContext } from "react";
import { UserContext } from "../utilities/userContextMethods";
import EditSong from '../components/editSong';

export default function AddSong() {
  const user = useContext(UserContext);
  const authenticated = (user != null);

  const handleSuccess = (songId: string) => {
    window.location.href = `/songs/${songId}`;
  }

  return (
    <div>
      {(authenticated) ? <EditSong handleSuccess={handleSuccess} /> : <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}