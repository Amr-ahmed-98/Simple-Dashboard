import React, { useMemo } from 'react';

const teamImages = [
  { src: '/images/person1.png', alt: 'Person 1' },
  { src: '/images/person2.png', alt: 'Person 2' },
  { src: '/images/person3.png', alt: 'Person 3' },
  { src: '/images/person4.png', alt: 'Person 4' },
];

const projects = [
  {
    id: 1,
    name: 'YallaNshop Ecommerce',
    type: 'React Project',
    icon: '/images/icons8-react-64.png',
    leader: 'Emad El-Sayed',
    progress: 70,
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 2,
    name: 'GameChange Dashboard',
    type: 'Node.js Project',
    icon: '/images/Node.js.png',
    leader: 'Ali Mohamed',
    progress: 30,
    status: 'Planning',
    statusColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 3,
    name: 'Testing YallaNshop Ecommerce',
    type: 'React Project',
    icon: '/images/react-testing.png',
    leader: 'Omar Alaa',
    progress: 90,
    status: 'Review',
    statusColor: 'bg-purple-100 text-purple-800',
  },
  {
    id: 4,
    name: 'UI For Weather App',
    type: 'Design',
    icon: '/images/figma.png',
    leader: 'Salma Ahmed',
    progress: 100,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ProjectProfile = () => {
  const shuffledTeam = useMemo(() => shuffleArray(teamImages), []);

  const getProgressColor = (progress: number): string => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 rounded-xl my-6 md:p-8 '>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='mb-8'>
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                Projects 
              </h1>
              
            </div>
            <div className='flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border'>
              <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
              <span className='text-sm font-medium text-gray-700'>
                {projects.length} Active Projects
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className='hidden lg:block'>
          <div className='bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden'>
            <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200'>
              <div className='grid grid-cols-12 gap-4 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                <div className='col-span-4'>Project</div>
                <div className='col-span-2'>Leader</div>
                <div className='col-span-2'>Team</div>
                <div className='col-span-2'>Progress</div>
                <div className='col-span-2'>Status</div>
              </div>
            </div>
            <div className='divide-y divide-gray-100'>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className='px-6 py-6 hover:bg-gray-50 transition-all duration-200 group'
                >
                  <div className='grid grid-cols-12 gap-4 items-center'>
                    {/* Project Info */}
                    <div className='col-span-4 flex items-center gap-4'>
                      <div className='relative'>
                        <img
                          src={project.icon}
                          alt={project.name}
                          className='w-12 h-12 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-200'
                        />
                        <div className='absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white'></div>
                      </div>
                      <div>
                        <h3 className='font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-200'>
                          {project.name}
                        </h3>
                        <p className='text-sm text-gray-500 mt-1'>
                          {project.type}
                        </p>
                      </div>
                    </div>

                    {/* Leader */}
                    <div className='col-span-2'>
                      <p className='font-medium text-gray-800'>
                        {project.leader}
                      </p>
                    </div>

                    {/* Team */}
                    <div className='col-span-2'>
                      <div className='flex -space-x-2'>
                        {shuffledTeam.slice(0, 3).map((img, idx) => (
                          <img
                            key={img.alt}
                            src={img.src}
                            alt={img.alt}
                            className='w-9 h-9 rounded-full border-3 border-white shadow-md hover:scale-110 hover:z-10 transition-all duration-200 cursor-pointer bg-gray-100'
                          />
                        ))}
                        {shuffledTeam.length > 3 && (
                          <div className='w-9 h-9 rounded-full bg-gray-100 border-3 border-white shadow-md flex items-center justify-center text-xs font-semibold text-gray-600'>
                            +{shuffledTeam.length - 3}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Progress */}
                    <div className='col-span-2'>
                      <div className='flex items-center gap-3'>
                        <div className='flex-1 bg-gray-200 rounded-full h-2 overflow-hidden'>
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                              project.progress
                            )}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className='text-sm font-semibold text-gray-700 min-w-[35px]'>
                          {project.progress}%
                        </span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className='col-span-2'>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className='lg:hidden space-y-6'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300'
            >
              {/* Card Header */}
              <div className='p-6 pb-4'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-4'>
                    <div className='relative'>
                      <img
                        src={project.icon}
                        alt={project.name}
                        className='w-14 h-14 rounded-xl shadow-md'
                      />
                      <div className='absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white'></div>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 text-lg leading-tight'>
                        {project.name}
                      </h3>
                      <p className='text-sm text-gray-500 mt-1'>
                        {project.type}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Progress Section */}
                <div className='mb-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm font-medium text-gray-600'>
                      Progress
                    </span>
                    <span className='text-sm font-bold text-gray-800'>
                      {project.progress}%
                    </span>
                  </div>
                  <div className='bg-gray-200 rounded-full h-3 overflow-hidden'>
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                        project.progress
                      )}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className='px-6 py-4 bg-gray-50 border-t border-gray-100'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-xs text-gray-500 mb-1'>Project Leader</p>
                    <p className='font-semibold text-gray-800'>
                      {project.leader}
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div>
                      <p className='text-xs text-gray-500 mb-1 text-right'>
                        Team Members
                      </p>
                      <div className='flex -space-x-2 justify-end'>
                        {shuffledTeam.slice(0, 3).map((img, idx) => (
                          <img
                            key={img.alt}
                            src={img.src}
                            alt={img.alt}
                            className='w-8 h-8 rounded-full border-2 border-white shadow-sm bg-gray-100'
                          />
                        ))}
                        {shuffledTeam.length > 3 && (
                          <div className='w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center text-xs font-semibold text-gray-600'>
                            +{shuffledTeam.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {[
            {
              label: 'Total Projects',
              value: projects.length,
              color: 'bg-blue-500',
            },
            {
              label: 'Completed',
              value: projects.filter((p) => p.progress === 100).length,
              color: 'bg-green-500',
            },
            {
              label: 'In Progress',
              value: projects.filter((p) => p.progress > 0 && p.progress < 100)
                .length,
              color: 'bg-yellow-500',
            },
            {
              label: 'Team Members',
              value: shuffledTeam.length,
              color: 'bg-purple-500',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-600 mb-1'>
                    {stat.label}
                  </p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl ${stat.color} bg-opacity-10 flex items-center justify-center`}
                >
                  <div className={`w-6 h-6 rounded-full ${stat.color}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectProfile;
