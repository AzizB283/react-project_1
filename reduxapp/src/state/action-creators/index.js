export const depositMoney = (amount) => {
  return {
    type: "deposit",
    payload: amount,
  };
};

export const withdrawMoney = (amount) => {
  return {
    type: "withdraw",
    payload: amount,
  };
};

export const apiCall = (data) => {
    return {
        type: "data",
        payload: data,
    }
}
