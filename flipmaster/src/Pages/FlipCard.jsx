import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCurrentQuestion,setQuestions } from '../store/reducers/CardReducer'; 

const categories = [
  {
    title: 'Education',
    description: 'Explore various educational resources and materials.',
    name: 'Education',
    route: '/education',
    color: 'bg-blue-500',
    src: '/Images/Education.png', // Path to the image
  },
  {
    title: 'Health',
    description: 'Find information and resources to stay healthy and fit.',
    name: 'Health',
    route: '/health',
    color: 'bg-red-500',
    src: '/Images/Health.png', // Path to the image
  },
  {
    title: 'Technology',
    description: 'Stay updated with the latest in technology and gadgets.',
    name: 'Technology',
    route: '/technology',
    color: 'bg-yellow-500',
    src: '/images/Technology.png', // Path to the image
  },
];


function FlipCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = async (category) => {
    const storedQuestions = localStorage.getItem(`questions_${category.name}`);

    if (storedQuestions) {
      // Use the questions from localStorage
      const questions = JSON.parse(storedQuestions);
      dispatch(setQuestions(questions)); // Store the entire list
      dispatch(setCurrentQuestion(questions[0])); // Set the first question
    } else {
      // Fetch questions from the backend
      try {
        const response = await axios.get(`/api/questions?category=${category.name}`);
        const questions = response.data;

        // Store the questions in localStorage
        localStorage.setItem(`questions_${category.name}`, JSON.stringify(questions));

        // Dispatch to Redux store
        dispatch(setQuestions(questions)); // Store the entire list
        dispatch(setCurrentQuestion(questions[0])); // Set the first question
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    }

    // Navigate to the first question
    navigate(category.route);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
      <header className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold">Welcome to FlipCard</h1>
        <p className="text-xl mt-2">Select a Category</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full p-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`relative group perspective cursor-pointer transform transition-transform hover:scale-105 ${category.color} rounded-lg shadow-lg`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="relative w-full h-full text-white flex items-center justify-center font-bold text-2xl bg-opacity-75 backdrop-filter backdrop-blur-md rounded-lg group-hover:rotate-y-180 transform transition-transform duration-500">
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FlipCard };
