# Steps to be followed
1. Break the app into components.
   
2. Build a static version of the app. 
   
3. Determine what should be stateful.
        1. We need to check some criteria to identify what should be state and what should not. Following are the criteria which we need to consider:
           1.  Is it passed in form a Parent via props? If yes, then its probably not a state.
           2.  Does it change over the time? If not, it probably is not a state.
           3.  Can you compute it based on any other state or props in your component? If yes, then its not a state.
        2. Now lets apply these criteria on our Components
           1. TimerDashboard:
              1. isOpen boolean for ToggleableTimerForm. The data is defined here,it changes over time and cannot be computed from other data Thus it is stateful.
           2. EditableTimerList:
              1. Timer Properties: They are stateful, as data is defined here,it changes over time and cannot be computed from other data.
              2. editFormOpen: I wont create a state for this in this component. Why? I explained you in detail...
           3. EditableTimer:
              1. editFOrmOpen: As dicussedwe will make this stateful in this component.
           4. Timer:
              1. Timer Properties: All these properties are received from parent component, so there is no need to make them stateful.
           5. TimerForm:
              1. title and project: We might be tempted to make this stateless, but Forms needs a special treatment in React. They need to manage their state by themself. Thus we will make them stateful.
   
4. Determine in which components each piece of state should live.
   1. We need to follow the process which is:   
      1. Identify every component that renders something based on the state.
      2. FInd a common owner component( a single component above all the components that need the state in the hierarchy.)
      3. Either the common owner or another component higher up in the hierarchy should own the state.
      4. If you can't find a component where it makes sense to own the state, create a new component simply holding for the state and add it somewhere in the hierarchy above the common owner component.
   2. Timer Properties will be onwed and managed by TimerDashboard.
   3. Every EditableTimer will manage the state of its editFormOpen.
   4. TimerForm is special component as it needs to manage its own form data.
   5. We will be tempted to make isOpen state in the TimerDashboard, but isOpen only affects ToggleableTimerForm, so it is good that we make the state in TogglebaleTimerFOrm
   
5. Hard-code the initial state.
   
6. Add inverse data flow.
   
7. Add server communication.