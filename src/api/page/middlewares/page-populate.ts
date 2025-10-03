/**
 * Page populate middleware
 * Automatically populates header.MainMenu.MenuItem, content.image, and content.button
 */

export default (config, { strapi }) => {
  return async (ctx, next) => {
    // Define the default populate configuration as an array
    const defaultPopulate = [
      'header.MainMenu.MenuItem',
      'content.image', 
      'content.button'
    ];

    // Apply the default populate to the query if no populate is already specified
    if (!ctx.query.populate) {
      ctx.query.populate = defaultPopulate;
    }

    await next();
  };
};
