'use client';
import React, { useMemo } from 'react';
import { useTheme } from '../../../context/ThemeContext';

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
  const { colors } = useTheme();
  const shuffledTeam = useMemo(() => shuffleArray(teamImages), []);

  const getProgressColor = (progress: number): string => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div
      className={`min-h-screen ${colors.background} p-4 rounded-xl my-6 md:p-8`}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='mb-8'>
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <div>
              <h1
                className={`text-3xl md:text-4xl font-bold ${colors.textPrimary} mb-2`}
              >
                Projects
              </h1>
            </div>
            <div
              className={`${colors.card} px-4 py-2 rounded-xl shadow-sm border ${colors.border} flex items-center gap-3`}
            >
              <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
              <span className={`text-sm font-medium ${colors.textSecondary}`}>
                {projects.length} Active Projects
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className='hidden lg:block'>
          <div
            className={`${colors.card} rounded-2xl shadow-xl border ${colors.border} overflow-hidden`}
          >
            <div
              className={`${colors.backgroundSecondary} px-6 py-4 border-b ${colors.border}`}
            >
              <div
                className={`grid grid-cols-12 gap-4 text-xs font-semibold ${colors.textSecondary} uppercase tracking-wider`}
              >
                <div className='col-span-4'>Project</div>
                <div className='col-span-2'>Leader</div>
                <div className='col-span-2'>Team</div>
                <div className='col-span-2'>Progress</div>
                <div className='col-span-2'>Status</div>
              </div>
            </div>
            <div className={`divide-y ${colors.borderSecondary}`}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`px-6 py-6 ${colors.background} hover:${colors.backgroundSecondary} transition-all duration-200 group`}
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
                        <h3
                          className={`font-semibold ${colors.textPrimary} text-lg group-hover:text-blue-600 transition-colors duration-200`}
                        >
                          {project.name}
                        </h3>
                        <p className={`text-sm ${colors.textTertiary} mt-1`}>
                          {project.type}
                        </p>
                      </div>
                    </div>

                    {/* Leader */}
                    <div className='col-span-2'>
                      <p className={`font-medium ${colors.textSecondary}`}>
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
                            className={`w-9 h-9 rounded-full border-3 border-white shadow-md hover:scale-110 hover:z-10 transition-all duration-200 cursor-pointer ${colors.backgroundTertiary}`}
                          />
                        ))}
                        {shuffledTeam.length > 3 && (
                          <div
                            className={`w-9 h-9 rounded-full ${colors.backgroundTertiary} border-3 border-white shadow-md flex items-center justify-center text-xs font-semibold ${colors.textSecondary}`}
                          >
                            +{shuffledTeam.length - 3}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Progress */}
                    <div className='col-span-2'>
                      <div className='flex items-center gap-3'>
                        <div
                          className={`${colors.borderSecondary} rounded-full h-2 overflow-hidden`}
                        >
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                              project.progress
                            )}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span
                          className={`text-sm font-semibold ${colors.textSecondary} min-w-[35px]`}
                        >
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
              className={`${colors.card} rounded-2xl shadow-lg border ${colors.border} overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              {/* Card Header */}
              <div className={`p-6 pb-4`}>
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
                      <h3
                        className={`font-bold ${colors.textPrimary} text-lg leading-tight`}
                      >
                        {project.name}
                      </h3>
                      <p className={`text-sm ${colors.textTertiary} mt-1`}>
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
                    <span
                      className={`text-sm font-medium ${colors.textSecondary}`}
                    >
                      Progress
                    </span>
                    <span className={`text-sm font-bold ${colors.textPrimary}`}>
                      {project.progress}%
                    </span>
                  </div>
                  <div
                    className={`${colors.borderSecondary} rounded-full h-3 overflow-hidden`}
                  >
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
              <div
                className={`px-6 py-4 ${colors.backgroundSecondary} border-t ${colors.borderSecondary}`}
              >
                <div className='flex items-center justify-between'>
                  <div>
                    <p className={`text-xs ${colors.textTertiary} mb-1`}>
                      Project Leader
                    </p>
                    <p className={`font-semibold ${colors.textSecondary}`}>
                      {project.leader}
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div>
                      <p
                        className={`text-xs ${colors.textTertiary} mb-1 text-right`}
                      >
                        Team Members
                      </p>
                      <div className='flex -space-x-2 justify-end'>
                        {shuffledTeam.slice(0, 3).map((img, idx) => (
                          <img
                            key={img.alt}
                            src={img.src}
                            alt={img.alt}
                            className={`w-8 h-8 rounded-full border-2 border-white shadow-sm ${colors.backgroundTertiary}`}
                          />
                        ))}
                        {shuffledTeam.length > 3 && (
                          <div
                            className={`w-8 h-8 rounded-full ${colors.backgroundTertiary} border-2 border-white shadow-sm flex items-center justify-center text-xs font-semibold ${colors.textSecondary}`}
                          >
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
              className={`${colors.card} rounded-xl p-6 shadow-md border ${colors.border} hover:shadow-lg transition-shadow duration-200`}
            >
              <div className='flex items-center justify-between'>
                <div>
                  <p
                    className={`text-sm font-medium ${colors.textSecondary} mb-1`}
                  >
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold ${colors.textPrimary}`}>
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
