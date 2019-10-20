function hasSubscription(profile) {
    if (!profile.subscription) return false;
    return profile.subscription.status === 'active' || profile.subscription.status === 'suspended';
}
const userProfile = {
    name: "Mewster",
    password: 666123,
    subscription: { status: 'active' },
}
const userProfile1 = {
    name: "woofster",
    password: 667133,
    subscription: { status: '' },
}
const userProfile2 = {
    name: "sterSter",
    password: 636126,
    subscription: { status: 'suspended' },
}
const userProfile3 = {
    name: "sterSterMew",
    password: 136626,
    subscription: { status: 'cancelled' },
}
console.log(hasSubscription(userProfile));
console.log(hasSubscription(userProfile1));
console.log(hasSubscription(userProfile2));
console.log(hasSubscription(userProfile3));
