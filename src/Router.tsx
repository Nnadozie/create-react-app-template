import Landing from 'Features/Landing';
import NotFound from 'Features/NotFound';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
