const initialState=[
    {
        title: "Last Episode",
        id: 0,
        cards:[
            {
                id:0,
                text: "we created static list and static card!"
            },
            {
                id:1,
                text: "we created second card from static list and static card!"
            }
        ]
    },
    {
        title: "This Episode",
        id: 1,
        cards:[
            {
                id:0,
                text: "List two card 1!"
            },
            {
                id:1,
                text: "List two card 2!"
            },
            {
                id:2,
                text: "List three card 3!"
            },
            {
                id:3,
                text: "List three card 4!"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default listsReducer;