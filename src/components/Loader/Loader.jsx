import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="200"
      width="200"
      ariaLabel="vortex-loading"
      wrapperStyle={{ position: 'absolute', top: '45%', left: '45%' }}
      wrapperClass="vortex-wrapper"
      colors={[' rgba(209, 72, 17, 0.945)', 'rgba(241, 208, 202, 0.3)', 'rgba(209, 72, 17, 0.945)', 'rgba(241, 208, 202, 0.3)', 'rgba(209, 72, 17, 0.945)', 'rgba(241, 208, 202, 0.3)']}
    />
  );
};