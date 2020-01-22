import instagram from "node-instagram";

const insta = new instagram({
  clientId: "477598409622467",
  clientSecret: "ecd812fb2049996ad64a16144c1582a0",
  accessToken:
    "AQBxpekKAp5aS02ErYiMvUw-dg_pZsUVv6AXgZKD7tSZy8bGdqmpXlgawii0b1OEBHVRF9vKV8ZvXCbMm366iGDk-Uq7W6HU0vLZB0v0oe0t7S7xQvBbX3xuWjiY-S0u7zPciJIh21IOn8ALYfxYSgeg_E5yKgz5BdqluFMC0zlYyoFAFart-r-Pe1Lvlh_iew-Tmm13WBp0mDMgWq95Dm8MrB_pEYMbuDBww_rQ_GhaGg"
});

const data = async () => {
  await instagram.get("user/self");
};
console.log(data);
