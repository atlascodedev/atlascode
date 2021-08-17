// import React from 'react';

// const useNavigatorOnline = () => {
//   const [status, setStatus] = React.useState(isOnline());

//   const setOnline = () => setStatus(true);
//   const setOffline = () => setStatus(false);

//   React.useEffect(() => {
//     window.addEventListener('online', setOnline);
//     window.addEventListener('offline', setOffline);

//     return () => {
//       window.removeEventListener('online', setOnline);
//       window.removeEventListener('offline', setOffline);
//     };
//   }, []);

//   return status;
// };

// export default useNavigatorOnline;
