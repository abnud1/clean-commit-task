import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EstateType = "House" | "Apartment";
type EstateStatus = "for-sale" | "for-rent" | "reserved";
export interface Estate {
  id: string;
  title: string;
  size: number;
  address: string;
  price: number;
  beds: number;
  baths: number;
  type: EstateType;
  status: EstateStatus;
  image: string;
}
export interface EstatesState {
  estates: Estate[];
  filters: {
    priceRange: [number, number];
    footageRange: [number, number];
    beds?: number;
    baths?: number;
    estateType?: EstateType;
    search: string;
    status?: EstateStatus;
  };
  orderBy?: "price" | "size";
  numberOfShownEstates: number;
  selectedEstate?: Estate;
}
const slice = createSlice({
  name: "estate",
  initialState: {
    estates: [],
    filters: {
      priceRange: [0, 10000000],
      footageRange: [0, 2000],
      search: "",
    },
    numberOfShownEstates: 6,
  } as EstatesState,
  reducers: {
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.filters.priceRange = action.payload;
    },
    setFootageRange(state, action: PayloadAction<[number, number]>) {
      state.filters.footageRange = action.payload;
    },
    setBeds(state, action: PayloadAction<number | undefined>) {
      if (action.payload) {
        state.filters.beds = action.payload;
      } else if (state.filters.beds) {
        delete state.filters.beds;
      }
    },

    setBaths(state, action: PayloadAction<number | undefined>) {
      if (action.payload) {
        state.filters.baths = action.payload;
      } else if (state.filters.baths) {
        delete state.filters.baths;
      }
    },

    setEstateBy(state, action: PayloadAction<EstateType | undefined>) {
      if (action.payload) {
        state.filters.estateType = action.payload;
      } else if (state.filters.estateType) {
        delete state.filters.estateType;
      }
    },
    orderBy(state, action: PayloadAction<"price" | "size" | undefined>) {
      if (action.payload) {
        state.orderBy = action.payload;
      } else if (state.orderBy) {
        delete state.orderBy;
      }
    },
    selectEstate(state, action: PayloadAction<Estate>) {
      state.selectedEstate = action.payload;
    },
    search(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
    },
    setStatus(state, action: PayloadAction<EstateStatus | undefined>) {
      if (action.payload) {
        state.filters.status = action.payload;
      } else if (state.filters.status) {
        delete state.filters.status;
      }
    },
    showMore(state) {
      state.numberOfShownEstates += 6;
      if (state.estates.length < state.numberOfShownEstates) {
        state.numberOfShownEstates = state.estates.length;
      }
    },
  },
});
export function filteredEstates(state: EstatesState): Estate[] {
  const result = state.estates.filter((v) => {
    if (
      v.size < state.filters.footageRange[0] ||
      v.size > state.filters.footageRange[1]
    ) {
      return false;
    }
    if (
      v.price < state.filters.priceRange[0] ||
      v.price > state.filters.priceRange[1]
    ) {
      return false;
    }
    if (state.filters.estateType && v.type !== state.filters.estateType) {
      return false;
    }
    if (state.filters.beds && v.beds !== state.filters.beds) {
      return false;
    }
    if (state.filters.baths && v.baths !== state.filters.baths) {
      return false;
    }
    if (state.filters.status && v.status !== state.filters.status) {
      return false;
    }
    if (
      !v.address.includes(state.filters.search) &&
      !v.title.includes(state.filters.search)
    ) {
      return false;
    }
    return true;
  });
  if (state.orderBy) {
    // @ts-expect-error
    result.sort((a, b) => b[state.orderBy] - a[state.orderBy]);
  }
  return result.slice(0, state.numberOfShownEstates);
}
export default slice.reducer;
export const {
  selectEstate,
  setBaths,
  setBeds,
  setEstateBy,
  setFootageRange,
  setPriceRange,
  showMore,
  search,
  setStatus,
} = slice.actions;
