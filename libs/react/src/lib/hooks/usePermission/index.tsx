// type PermissionDesc =
//   | PermissionDescriptor
//   | DevicePermissionDescriptor
//   | MidiPermissionDescriptor
//   | PushPermissionDescriptor;

// type State = PermissionState | '';

// const usePermission = (permissionDesc: PermissionDesc): State => {
//   let mounted = true;
//   let permissionStatus: PermissionStatus | null = null;

//   const [state, setState] = React.useState<State>('');

//   const onChange = () => {
//     if (mounted && permissionStatus) {
//       setState(permissionStatus.state);
//     }
//   };

//   const changeState = () => {
//     onChange();
//     windowAddListener(permissionStatus, 'change', onChange);
//   };

//   React.useEffect(() => {
//     navigator.permissions
//       .query(permissionDesc)
//       .then((status) => {
//         permissionStatus = status;
//         changeState();
//       })
//       .catch(noOperation);

//     return () => {
//       mounted = false;
//       permissionStatus &&
//         windowRemoveListener(permissionStatus, 'change', onChange);
//     };
//   }, []);

//   return state;
// };

// export default usePermission;
