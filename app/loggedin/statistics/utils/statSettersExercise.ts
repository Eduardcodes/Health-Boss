import { useUserStore } from "@/lib/store/store";
import {  Session } from "@/lib/types";
import moment from "moment";

export const averageCaloriesBurnedPrevSessions = (userSessions: Session[], noOfSessions: number) => {
  const reversed = userSessions.slice().reverse()
  if(reversed.length > noOfSessions) {
    let calorieCount = 0
    for(let i=0; i<noOfSessions; i++){
      calorieCount += reversed[i].caloriesBurned
    }
    calorieCount = calorieCount/noOfSessions
    return {calorieCount}
  }
  let calorieCount = 0
  let overHowManySessions = 0
  for(let i=0; i<reversed.length; i++){
    calorieCount += reversed[i].caloriesBurned
    overHowManySessions = i
  }
  calorieCount = calorieCount/noOfSessions
  return {calorieCount, overHowManySessions}
}

export const mostPerformedActivities = (sessions: Session[], count:number) => {
  const activityCounts: { [ingredientName: string]: number } = {};

  for (const session of sessions) {
    for (const activity of session.activities) {
      const activityName = activity.activity;
      if (activityCounts[activityName]) {
        activityCounts[activityName]++;
      } else {
        activityCounts[activityName] = 1;
      }
    }
  }
  const sortedIngredients = Object.keys(activityCounts).sort(
    (a, b) => activityCounts[b] - activityCounts[a]
  );
    return sortedIngredients.slice(0,count)
}

export const getChartData = (method: string, sessionHistory: Session[]) => {
  
  let xAxis: string[] = []
  let yProgenitor: {[key: string]: number} = {}
  if(method === 'Total') {
    sessionHistory.forEach(session => {
      const date = moment(session.createdAt).format('DD/MM')
      if(!xAxis.includes(date)) {
        xAxis.push(date)
        yProgenitor[date] = session.caloriesBurned
      } else {
        yProgenitor[date] += session.caloriesBurned
      }
    })
  } else {
    sessionHistory.forEach(session => {
      if(session.time === method) {
        const date = moment(session.createdAt).format('DD/MM')
        if(!xAxis.includes(date)) {
          xAxis.push(date)
          yProgenitor[date] = session.caloriesBurned
        } else {
          yProgenitor[date] += session.caloriesBurned
        }
      }
    })
  }
  return {xAxis, yAxis: Object.values(yProgenitor)}
}


