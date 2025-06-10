import Image from 'next/image';

const teams = [
  {
    name: 'React Developers',
    members: 72,
    icon: '/images/icons8-react-64.png',
    badge: { label: 'Developer', color: 'bg-red-100 text-red-500' },
  },
  {
    name: 'Testing Team',
    members: 122,
    icon: '/images/react-testing.png', 
    badge: { label: 'Testing', color: 'bg-purple-100 text-purple-500' },
  },
  {
    name: 'UI Designer',
    members: 7,
    icon: '/images/figma.png',
    badge: { label: 'Designer', color: 'bg-blue-100 text-blue-500' },
  },
  {
    name: 'Node.js Developers',
    members: 289,
    icon: '/images/Node.js.png',
    badge: { label: 'Developer', color: 'bg-red-100 text-red-500' },
  },
];

const TeamsProfile = () => {
  return (
    <div className='max-w-md bg-white shadow-2xl rounded-2xl p-6 text-left w-full md:w-96'>
      <h2 className='text-gray-500 font-bold mb-4 text-2xl'>Teams</h2>
      <div className='space-y-6'>
        {teams.map((team) => (
          <div key={team.name} className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Image
                src={team.icon}
                alt={team.name}
                width={40}
                height={40}
                className='rounded-full'
              />
              <div>
                <div className='font-semibold text-gray-800'>{team.name}</div>
                <div className='text-gray-500 text-sm'>
                  {team.members} Members
                </div>
              </div>
            </div>
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${team.badge.color}`}
            >
              {team.badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsProfile;
