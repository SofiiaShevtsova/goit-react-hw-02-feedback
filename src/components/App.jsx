import { Feedback } from './feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '50px',
        width: '500px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'rgba(152, 25, 25, 0.3)',
      }}
    >
      <Feedback />
    </div>
  );
};
