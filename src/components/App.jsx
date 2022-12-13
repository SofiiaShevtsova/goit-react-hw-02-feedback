import { ProfileCard } from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        color: '#010101',
      }}
    >
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />.
    </div>
  );
};
