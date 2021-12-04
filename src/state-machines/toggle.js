import { createMachine } from 'xstate';

// only has 2 states, either raw or rendered
export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'rendered',
  states: {
    rendered: {
      on: { SWITCH: 'raw' }
    },
    raw: {
      on: { SWITCH: 'rendered' }
    }
  }
});

// has nested state, to be raw or rendered, it first has to be visible
// the memo.history here allows us to save the history of the previous state
// in this case, it would keep a history if the state was rendered or raw when we toggle visible/hidden and revert to that state instead of resetting each time.
export const nestedToggleMachine = createMachine({
  id: 'toggle',
  initial: 'visible',
  states: {
    visible: {
      on: {
        TOGGLE: 'hidden'
      },
      initial: 'rendered',
      states: {
        rendered: {
          on: { SWITCH: 'raw' }
        },
        raw: {
          on: { SWITCH: 'rendered' }
        },
        memo: {
          type: 'history'
        }
      }
    },
    hidden: {
      on: {
        TOGGLE: "visible.memo"
      }
    }
  }
});

