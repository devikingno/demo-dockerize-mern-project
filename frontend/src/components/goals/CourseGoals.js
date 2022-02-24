import React from 'react';

import './CourseGoals.css';
import Card from '../UI/Card';
import GoalItem from './GoalItem';

function CourseGoals(props) {
  const hasNoGoals = !props.goals || props.goals.length === 0;

  return (
    <section id='course-goals'>
      <Card>
        <h2>--------------------Your Texts--------------------</h2>
        {hasNoGoals && <h2>You haven't entered anything, try to enter something</h2>}
        <ul>
          {props.goals.map((goal) => (
            <GoalItem
              key={goal.id}
              id={goal.id}
              text={goal.text}
              onDelete={props.onDeleteGoal}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default CourseGoals;
