// export const name = state => state.name;

export const keySessions = state => state.sessions.filter(session => session.user.name.includes(state.filterKey));
export const currentId = state => state.currentSessionId;
export const user = state => state.user;
export const currentSession = state => state.sessions.find(session => session.id === state.currentSessionId);
