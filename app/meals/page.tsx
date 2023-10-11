'use client';
import { useState } from 'react';
import Modal from '../ed/components/Modal';
import MealList from '@/lib/components/mealList';
import MealCard from '@/lib/components/mealCard';
import AddMeal from '@/lib/components/addMeal';
import AddMealEntry from '@/lib/components/addMealEntry';
import SearchPopup from '@/lib/components/search';
import { FoodData, Meal } from '@/lib/types';
import HeaderPage from '@/lib/components/HeaderPage';
import Image from 'next/image';

export default function MealsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [addMealBox, setAddMealBox] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState<FoodData[]>([]);
  const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([]);

  return (
    <div className="sectionMainPages ">
      <HeaderPage title={'My meals'} />
      <button
        className={`rounded-xl p-3 border-2 border-lightGreen mt-5  font-bold text-base w-[350px]  shadow-lg bg-lightGreen text-mainBlack self-center mb-5`}
        onClick={() => setAddMealBox(!addMealBox)}
      >
        {!addMealBox ? 'Add new meal' : 'Cancel'}
      </button>

      {addMealBox && (
        <AddMeal
          setDisplayedMeals={setDisplayedMeals}
          setModalOpen={setModalOpen}
          selectedFoods={selectedFoods}
          setAddMealBox={setAddMealBox}
        />
      )}

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <SearchPopup
          setModalOpen={setModalOpen}
          setSelectedFoods={setSelectedFoods}
        ></SearchPopup>
      </Modal>

      <div className={!addMealBox ? `block` : 'hidden'}>
        {displayedMeals && (
          <MealList
            displayedMeals={displayedMeals}
            setDisplayedMeals={setDisplayedMeals}
          />
        )}
      </div>

      <section
        className={
          !addMealBox
            ? `cardBgPhoto flex flex-col h-28 bg-cover relative mt-3 cursor-pointer`
            : 'hidden'
        }
      >
        <div>
          <Image
            src="/healthfood.jpg"
            alt="exercise icon"
            fill={true}
            style={{ objectFit: 'cover' }}
            className="absolute rounded-lg  opacity-40"
            priority={true}
          />
        </div>
        <div className="z-10 flex flex-col  ">
          <p className="text-lg font-bold">Ask for health ideas </p>
          <p className="text-lg font-bold">with our AI NutriTrainer</p>
        </div>
      </section>
    </div>
  );
}
