export const downloadExcel = async (api: () => Promise<any>, title: string) => {
  const response = await api();

  const currentTime = new Date();

  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([response])).toString();
  link.setAttribute(
    "download",
    `${title}_${
      currentTime.getMonth() + 1
    }월${currentTime.getDate()}일_${currentTime.getHours()}시${currentTime.getMinutes()}분.xlsx`
  );
  link.click();
};
